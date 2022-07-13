package lk.ijse.easyCarRentalSystem.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

/**
 * @author : D.D.Sandaruwan <dulanjayasandaruwan1998@gmail.com>
 * @Since : 10/07/2022
 **/
@NoArgsConstructor
@AllArgsConstructor
@Data
public class CustomerDTO {

    private String customerNICNumber;

    private MultipartFile customerNICImage;

    private String customerName;

    private String customerAddress;

    private String customerContact;

    private String customerEmail;

    private String customerPassword;

    private String customerDrivingNumber;

    private MultipartFile customerDrivingImage;

    private String customerStatus;

    public CustomerDTO(String customerNICNumber) {
        this.customerNICNumber = customerNICNumber;
    }

    public CustomerDTO(String customerEmail, String customerPassword) {
        this.customerEmail = customerEmail;
        this.customerPassword = customerPassword;
    }
}
