package lk.ijse.easyCarRentalSystem.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * @author : D.D.Sandaruwan <dulanjayasandaruwan1998@gmail.com>
 * @Since : 10/07/2022
 **/

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
@Entity
public class Admin {

    @Id
    private String adminID;

    private String adminName;

    private String adminEmail;

    private String adminPassword;

    //    {
    //      "adminID":"A001",
    //      "adminName":"Dulanjaya",
    //      "adminEmail":"dulanjayasandaruwan1998@gmail.com",
    //      "adminPassword":"admin"
    //    }

}
