namespace 
{
    public interface IMongoDatabaseSettings<T>
    {
        String CollectionName {get; set;}
        String ConnectionString {get; set;}
        String DatabaseName {get; set;}
    }
}