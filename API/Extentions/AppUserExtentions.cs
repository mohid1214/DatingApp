using System;
using API.DTOs;
using API.Entities;
using API.Interfaces;

namespace API.Extentions;

public static class AppUserExtentions
{
    public static UserDto ToDto(this AppUser user,ITokenService tokenService)
    {
         return new UserDto
        {
            Id = user.Id,
            DisplayName = user.DisplayName,
            Email = user.Email,
            Token = tokenService.CreateToken(user)  
        };
    }
}
