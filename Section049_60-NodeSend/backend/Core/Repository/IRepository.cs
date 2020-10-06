using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Core.Repository
{
    public interface IRepository<T>
    {
        Task<T> Create(T entity);
        Task<List<T>> Read();
        Task<T> Read(String id);
        Task<T> Update(T entityToUpdate);
        Task Remove(String id);
    }
}
