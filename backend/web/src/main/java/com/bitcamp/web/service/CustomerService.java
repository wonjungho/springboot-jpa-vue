package com.bitcamp.web.service;

import java.util.Optional;

import com.bitcamp.web.entities.Customer;
import com.bitcamp.web.repositories.CustomerRepository;
import com.bitcamp.web.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerService {
    @Autowired CustomerRepository customerRepository;
    
    public long count(){
        return customerRepository.count();
    }
    
    public void delete(Customer customer){
         customerRepository.delete(customer);
    }
    
    public void	deleteAll(){
        customerRepository.deleteAll();
    }
    public void	deleteAll(Iterable<Customer> entities){
        customerRepository.deleteAll(entities);
    }
    public void	deleteById(Long id){
        customerRepository.deleteById(id);
    }
    public boolean	existsById(Long id){
        return customerRepository.existsById(id);
    }
    public Iterable<Customer> findAll(){
        return customerRepository.findAll();
    }
    public Iterable<Customer> findAllById(Iterable<Long> ids){
        return customerRepository.findAllById(ids);
    }
    public Optional<Customer> findById(Long id){
        return customerRepository.findById(id);
    }
    public Customer save(Customer customer){
        return customerRepository.save(customer);
    }
    public Iterable<Customer> saveAll(Iterable<Customer> entities){
        return customerRepository.saveAll(entities);
    }

}