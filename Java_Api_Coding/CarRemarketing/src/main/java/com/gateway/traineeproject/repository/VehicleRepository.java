package com.gateway.traineeproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gateway.traineeproject.model.VehicleMaster;

/**
 * @author Hiren Khatri
 *
 */
public interface VehicleRepository extends JpaRepository<VehicleMaster, Long>{

}
