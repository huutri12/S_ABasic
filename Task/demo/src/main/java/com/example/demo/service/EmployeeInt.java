package com.example.demo.service;

import com.example.demo.model.Employee;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface EmployeeInt {
    void deleteEmployeeById(int id);
    Optional<Employee> findEmployeeById(int id);
}
