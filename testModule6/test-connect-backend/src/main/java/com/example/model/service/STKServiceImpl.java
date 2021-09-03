package com.example.model.service;

import com.example.model.entity.SoTietKiem;
import com.example.model.repository.ISTKRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class STKServiceImpl implements ISTKService {
    @Autowired
    ISTKRepository istkRepository;


    @Override
    public Optional<SoTietKiem> findById(Long id) {
        return istkRepository.findById(id);
    }

    @Override
    public List<SoTietKiem> findAll() {
        return istkRepository.findAll();
    }

    @Override
    public SoTietKiem save(SoTietKiem soTietKiem) {
        return istkRepository.save(soTietKiem);
    }

    @Override
    public void remove(Long id) {
        istkRepository.deleteById(id);
    }

    @Override
    public Page<SoTietKiem> findAllByCustomerContaining(Pageable pageable, String keyword) {
        return istkRepository.findAllByCustomerContaining(pageable, "%" + keyword + "%");
    }

    @Override
    public List<SoTietKiem> findAllByCustomer(String keyword) {
        return istkRepository.findAllByCustomer("%" + keyword + "%");
    }

    @Override
    public List<SoTietKiem> findAllPage(int index) {
        return istkRepository.findAllPage(index);
    }

//
//
//    @Override
//    public List<SoTietKiem> findAllLimit(String keyword, int index) {
//        return istkRepository.findAllLimit("%"+keyword+"%", index);
//    }

}
