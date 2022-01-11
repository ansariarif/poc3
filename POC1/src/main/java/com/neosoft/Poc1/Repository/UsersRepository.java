package com.neosoft.Poc1.Repository;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.neosoft.Poc1.Model.User;

public interface UsersRepository extends JpaRepository<User, Integer>{
	
	List<User> findByName(String firstname);
	
	List<User> findBySurname(String firstname);
	
	List<User> findByPincode(long pincode);
	
	
	@Transactional
	@Modifying
	@Query("UPDATE User u SET u.active = :active WHERE u.id = :id")
	void deleteStatus(@Param("active") String status,@Param("id") int id);
	

}
