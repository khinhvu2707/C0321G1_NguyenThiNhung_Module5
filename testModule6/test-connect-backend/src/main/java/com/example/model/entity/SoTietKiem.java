package com.example.model.entity;

import javax.persistence.*;

@Entity
public class SoTietKiem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String maKhachHang;
    private String tenKhachHang;
    @Column(columnDefinition = "DATE")
    private String ngayMoSo;
    @Column(columnDefinition = "DATE")
    private String ngayGui;
    private String kiHan;
    private String soTienGui;
    private String laiSuat;
    private String uuDai;

    public SoTietKiem() {
    }

    public SoTietKiem(Long id, String maKhachHang, String tenKhachHang, String ngayMoSo, String ngayGui, String kiHan, String soTienGui, String laiSuat, String uuDai) {
        this.id = id;
        this.maKhachHang = maKhachHang;
        this.tenKhachHang = tenKhachHang;
        this.ngayMoSo = ngayMoSo;
        this.ngayGui = ngayGui;
        this.kiHan = kiHan;
        this.soTienGui = soTienGui;
        this.laiSuat = laiSuat;
        this.uuDai = uuDai;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMaKhachHang() {
        return maKhachHang;
    }

    public void setMaKhachHang(String makhachHang) {
        this.maKhachHang = makhachHang;
    }

    public String getTenKhachHang() {
        return tenKhachHang;
    }

    public void setTenKhachHang(String tenkhachHang) {
        this.tenKhachHang = tenkhachHang;
    }

    public String getNgayMoSo() {
        return ngayMoSo;
    }

    public void setNgayMoSo(String ngayMoSo) {
        this.ngayMoSo = ngayMoSo;
    }

    public String getNgayGui() {
        return ngayGui;
    }

    public void setNgayGui(String ngayGui) {
        this.ngayGui = ngayGui;
    }

    public String getKiHan() {
        return kiHan;
    }

    public void setKiHan(String kiHan) {
        this.kiHan = kiHan;
    }

    public String getSoTienGui() {
        return soTienGui;
    }

    public void setSoTienGui(String soTienGui) {
        this.soTienGui = soTienGui;
    }

    public String getLaiSuat() {
        return laiSuat;
    }

    public void setLaiSuat(String laiSuat) {
        this.laiSuat = laiSuat;
    }

    public String getUuDai() {
        return uuDai;
    }

    public void setUuDai(String uuDai) {
        this.uuDai = uuDai;
    }
}
