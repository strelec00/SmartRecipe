package com.rwt.SmartRecipe.service;


import com.rwt.SmartRecipe.dto.user.UserDTO;
import com.rwt.SmartRecipe.model.User;

import javax.xml.bind.ValidationException;
import java.util.List;
import java.util.UUID;

public interface UserService {

    UserDTO userToDTO(User user);

    User userDTOtoEntity(UserDTO userDTO);

    List<UserDTO> getAllUsers();

    UserDTO getUserByEmail(String email);

    UserDTO getUserById(UUID id);

    UserDTO createUser(UserDTO userDTO) throws ValidationException;

    UserDTO updateUser(UserDTO userDTO, UUID id);

    void deleteUser(UUID id);
}