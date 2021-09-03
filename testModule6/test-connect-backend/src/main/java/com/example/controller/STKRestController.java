package com.example.controller;

import com.example.model.entity.SoTietKiem;
import com.example.model.service.ISTKService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("stk/api")
public class STKRestController {
    @Autowired
    private ISTKService istkService;

    @GetMapping("stk-not-page")
    public ResponseEntity<List<SoTietKiem>> listSoTietKiemNotPage() {
        List<SoTietKiem> soTietKiemList = istkService.findAll();
        if (soTietKiemList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(soTietKiemList, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<SoTietKiem>> listSoTietKiem(@RequestParam int index) {
        List<SoTietKiem> soTietKiemList = istkService.findAllPage(index);
        if (soTietKiemList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(soTietKiemList, HttpStatus.OK);
    }
//
//    @GetMapping("search")
//    public ResponseEntity<List<SoTietKiem>> listSoTietKiemAndSearch(@RequestParam String tenKhachHang , @RequestParam int index) {
//        List<SoTietKiem> soTietKiemList = istkService.findAllLimit(tenKhachHang,index);
//        if (soTietKiemList.isEmpty()) {
//            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//        }
//        return new ResponseEntity<>(soTietKiemList, HttpStatus.OK);
//    }


//
//    @GetMapping("search")
//    public ResponseEntity<List<SoTietKiem>> listSTK(@RequestParam String tenKhachHang) {
//        List<SoTietKiem> soTietKiemList = istkService.findAllByCustomer(tenKhachHang);
//        if (soTietKiemList.isEmpty()) {
//            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//        }
//        return new ResponseEntity<>(soTietKiemList, HttpStatus.OK);
//    }

//    @GetMapping
//    public ResponseEntity<Page<SoTietKiem>> listBlog(@PageableDefault(value = 5) Pageable pageable, @RequestParam Optional<String> title) {
//        String keyword = "";
//        if (title.isPresent()) {
//            keyword = title.get();
//        }
//        Page<SoTietKiem> blogList = istkService.findAllByCustomerContaining(pageable,keyword);
//        if (blogList.isEmpty()) {
//            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//        }
//        return new ResponseEntity<>(blogList, HttpStatus.OK);
//    }

    @GetMapping("{id}")
    public ResponseEntity<Optional<SoTietKiem>> viewSoTietKiem(@PathVariable Long id) {
        Optional<SoTietKiem> soTietKiem = istkService.findById(id);
        if (!soTietKiem.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(soTietKiem, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<SoTietKiem> createSoTietKiem(@RequestBody SoTietKiem soTietKiem) {
        return new ResponseEntity<>(istkService.save(soTietKiem), HttpStatus.OK);
    }

    @PutMapping("{id}")
    public ResponseEntity<SoTietKiem> updateCategory(@PathVariable Long id, @RequestBody SoTietKiem soTietKiem) {
        Optional<SoTietKiem> categoryOptional = istkService.findById(id);
        return categoryOptional.map(category1 -> {
            soTietKiem.setId(category1.getId());
            return new ResponseEntity<>(istkService.save(soTietKiem), HttpStatus.OK);
        }).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("{id}")
    public ResponseEntity<SoTietKiem> deleteCategory(@PathVariable Long id) {
        Optional<SoTietKiem> categoryOptional = istkService.findById(id);
        return categoryOptional.map(category -> {
            istkService.remove(id);
            return new ResponseEntity<>(category, HttpStatus.OK);
        }).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
}
