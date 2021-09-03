package com.example.model.repository;

import com.example.model.entity.SoTietKiem;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ISTKRepository extends JpaRepository<SoTietKiem, Long> {
    @Query(value = "select * from so_tiet_kiem stk where stk.ten_khach_hang like :customerName", nativeQuery = true)
    Page<SoTietKiem> findAllByCustomerContaining(Pageable pageable, @Param("customerName") String customerName);

    @Query(value = "select * from so_tiet_kiem stk where stk.ten_khach_hang like :customerName", nativeQuery = true)
    List<SoTietKiem> findAllByCustomer(@Param("customerName") String customerName);

//    @Query(value = "select * from so_tiet_kiem stk where stk.ten_khach_hang like :customerName limit ?1,5", nativeQuery = true)
//    List<SoTietKiem> findAllLimit(@Param("customerName") String customerName, int index);

    @Query(value = "select * from so_tiet_kiem stk limit ?1,5", nativeQuery = true)
    List<SoTietKiem> findAllPage(int index);

    @Query(value = "select * from so_tiet_kiem stk", nativeQuery = true)
    List<SoTietKiem> findAll();
}
