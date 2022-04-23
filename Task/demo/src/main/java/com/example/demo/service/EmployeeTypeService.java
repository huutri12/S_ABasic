package com.example.demo.service;


import com.example.demo.model.EmployeeType;
import com.example.demo.repository.EmployeeRepo;
import com.example.demo.repository.EmployeeTypeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeTypeService {
    private final EmployeeTypeRepo employeeTypeRepo;
    @Autowired
    public EmployeeTypeService(EmployeeTypeRepo employeeTypeRepo){
        this.employeeTypeRepo = employeeTypeRepo;
    }

    public List<EmployeeType> findAll(){
        return employeeTypeRepo.findAll();
    }
}
