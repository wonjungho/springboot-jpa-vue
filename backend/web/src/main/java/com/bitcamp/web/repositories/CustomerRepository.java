package com.bitcamp.web.repositories;

import com.bitcamp.web.entities.Customer;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface CustomerRepository extends CrudRepository<Customer,Long>{
    public Customer findCustomerByCustomerIdAndPassword(String customerId,String password);
    
}