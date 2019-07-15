package com.bitcamp.web.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.persistence.EntityNotFoundException;

import com.bitcamp.web.common.lambda.ISupplier;
import com.bitcamp.web.domain.CustomerDTO;
import com.bitcamp.web.entities.Customer;
import com.bitcamp.web.repositories.CustomerRepository;
import com.bitcamp.web.service.CustomerService;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/customers")
@CrossOrigin(origins = "http://localhost:3000",maxAge = 3600)
public class CustomerController {
    @Autowired CustomerService customerService;
    @Autowired CustomerDTO customer;
    @Autowired ModelMapper modelMapper;
    @Autowired CustomerRepository repo;

    @Bean
    public ModelMapper modelMapper(){
        
        return new ModelMapper();
    } 
    
    @GetMapping("/count")
    public long count(){
        System.out.println("===========count()진입=========");
        return customerService.count();
    }
   /*  @DeleteMapping("/{id}")
    public void delete(CustomerDTO dto){
         customerService.delete(null);
    }
    @DeleteMapping()
    public void	deleteAll(){
        customerService.deleteAll();
    }
    @DeleteMapping("/{id}")
    public void	deleteAll(Iterable<CustomerDTO> dtos){
        customerService.deleteAll(null);
    } */
    @DeleteMapping("/{id}")
    public void	deleteById(@PathVariable String id){
        Long l= Long.parseLong(id);
        customerService.deleteById(l);
    }
    @GetMapping("/exists/{id}")
    public boolean	existsById(@PathVariable String id){
        System.out.println("existsById로 넘어온 아이디"+ id);
        Long l =Long.parseLong(id);
        return customerService.existsById(l);
    }
    @GetMapping("")
    public Iterable<CustomerDTO> findAll(){
        Iterable<Customer> entities =customerService.findAll();
        List<CustomerDTO> list =new ArrayList<>();
        for(Customer s:entities){
            CustomerDTO cust =modelMapper.map(s,CustomerDTO.class);
            list.add(cust);
        }
        return list;
    }
   /*  @GetMapping("/{id}")
    public Iterable<CustomerDTO> findAllById(Iterable<Long> ids){
        Iterable<Customer> entity =customerService.findAllById(ids);
        return null;
    } */
    @GetMapping("/{id}")
    public CustomerDTO findById(@PathVariable String id) {
        return modelMapper.
        map(customerService.
        findById(Long.parseLong(id)).
        orElseThrow(EntityNotFoundException::new),CustomerDTO.class);
         
    }
    @PostMapping("")
    public HashMap<String,String> save(@RequestBody CustomerDTO dto){
        System.out.println("회원가입"+dto.toString());
        HashMap<String,String> map =new HashMap<>();
        Customer entity =new Customer();
        entity.setAddress(dto.getAddress());
        entity.setCity(dto.getCity());
        entity.setCustomerId(dto.getCustomerId());
        entity.setCustomerName(dto.getCustomerName());
        entity.setPassword(dto.getPassword());
        entity.setPhone(dto.getPhone());
        entity.setPhoto(dto.getPhoto());
        entity.setPostalcode(dto.getPostalcode());
        entity.setSsn(dto.getSsn());
        System.out.println("엔티티로바뀐정보"+entity.toString());
        customerService.save(entity);
        map.put("result", "success");
        return map;
    }
  /*   @PostMapping("/saveall")
    public Iterable<CustomerDTO> saveAll(Iterable<CustomerDTO> dto){
        Iterable<Customer> entity =customerService.saveAll(null);
        return null;
    } */
    @PostMapping("/login")
    public CustomerDTO login(@RequestBody CustomerDTO dto){
        System.out.println(dto.getCustomerId());
        System.out.println(dto.getPassword());

        ISupplier fx = (() -> {
              return repo.findCustomerByCustomerIdAndPassword(dto.getCustomerId(), dto.getPassword());   
            });            
            return modelMapper.map(fx.get(), CustomerDTO.class);
    }
}