package com.example.model.service;

import com.example.model.entity.SoTietKiem;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface ISTKService {
    Optional<SoTietKiem> findById(Long id);

    List<SoTietKiem> findAll();

    SoTietKiem save(SoTietKiem soTietKiem);

    void remove(Long id);

    Page<SoTietKiem> findAllByCustomerContaining(Pageable pageable, String keywordTitle);

    List<SoTietKiem> findAllByCustomer(String keywordTitle);

    List<SoTietKiem> findAllPage(int index);

//    List<SoTietKiem> findAllLimit(String customer,int index);
}
