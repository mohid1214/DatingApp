using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace API.Entities;

public class Member
{

    public required string Id { get; set; }
    public required string Gender { get; set; }
    public required string DateOfBirth { get; set; }
    public required string Created { get; set; }
    public required string LastActive { get; set; }
    public string? Description { get; set; }
    public required string City { get; set; }
    public required string Country { get; set; }
    public string? ImageUrl { get; set; }

    [JsonIgnore]
    public List<Photo> Photos { get; set; } = [];

    [JsonIgnore]
    [ForeignKey(nameof(Id))]
    public AppUser AppUser { get; set; } = null!;
}
