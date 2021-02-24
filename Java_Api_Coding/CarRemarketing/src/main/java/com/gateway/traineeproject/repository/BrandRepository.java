package com.gateway.traineeproject.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import com.gateway.traineeproject.model.Brand;

/**
 * @author Hiren Khatri
 *
 */
public interface BrandRepository  extends JpaRepository<Brand, Long>{
	public boolean existsByName(String name);
	boolean existsByIdAndName(long id,String name);
}
