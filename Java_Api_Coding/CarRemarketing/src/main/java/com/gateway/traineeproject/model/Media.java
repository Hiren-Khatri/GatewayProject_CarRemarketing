/**
 * 
 */
package com.gateway.traineeproject.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

/**
 * @author Hiren Khatri
 *
 */
@Entity
@Table(name = "Media")
public class Media {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name="Name")
	private String name;
	
	@Column(name = "Path")
	private String path;
	
	@Column(name = "MediaType")
	private String mediaType;
	
	@ManyToOne
	@JoinColumn(name = "VehicleId",referencedColumnName = "id")
	private VehicleMaster vehicleMaster;
}
