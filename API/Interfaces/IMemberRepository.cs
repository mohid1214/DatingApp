using System;
using API.Entities;

namespace API.Interfaces;

public interface IMemberRepository
{
    void Update(Member member);

    Task<bool> SaveAllAsync();
    Task<IReadOnlyList<Member>> GetMembersAsyn();
    Task<Member?> GetMemberByIdAsync(string Id);
    Task<IReadOnlyList<Photo>> GetPhotosForMemberASync(string memberId);
}
