package com.bitcamp.web.entities;

import java.io.Serializable;

import javax.persistence.*;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor(access = AccessLevel.PUBLIC)
@Entity
@Getter
@Setter
@ToString
@Table(name = "customers")
public class Customer implements Serializable {
    

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;
    @Column(name="customer_id") private String customerId; 
    @Column(name="customer_name") private String customerName;
    @Column(name="password") private String password;
    @Column(name="ssn") private String ssn;
    @Column(name="phone") private String phone;
    @Column(name="city") private String city;
    @Column(name="address") private String address;
    @Column(name="postalcode") private String postalcode;
    @Column(name="photo") private String photo;
    
    @Override
    public String toString(){
        return "Customer :[id:"+id+",customerId:" +customerId+", customerName:"+customerName+", password:"+password+", ssn:"+ssn+
        ", city:"+city+", address:"+address+", postalcode:"+postalcode+", photo:"+photo+"]";
    }

    @Builder
    public Customer(String customerId,String customerName,
    String password,String ssn,String phone,String city,
    String address,String postalcode,String photo){
        this.customerId = customerId;
        this.customerName = customerName;
        this.password = password;
        this.ssn = ssn;
        this.phone = phone;
        this.city = city;
        this.address = address;
        this.postalcode = postalcode;
        this.photo = photo;
    }
}