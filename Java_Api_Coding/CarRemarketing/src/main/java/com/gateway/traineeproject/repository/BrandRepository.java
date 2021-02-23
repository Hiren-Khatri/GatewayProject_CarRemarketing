package com.gateway.traineeproject.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.gateway.traineeproject.model.Brand;

/**
 * @author Hiren Khatri
 *
 */
public interface BrandRepository  extends JpaRepository<Brand, Long>{
}
