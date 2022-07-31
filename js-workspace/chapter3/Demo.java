import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.Map.Entry;
import java.util.stream.Collectors;

class Demo{
    public static void main(String[] args) {
        List<String> fruits = new ArrayList<String>();
        fruits.add("Apple");
        fruits.add("Mango");
        fruits.add("Mango");
        fruits.add("PineApple");
        fruits.add("Watermelon");
        fruits.add("Apple");
        fruits.add("Watermlon");
        fruits.add("Apple");
        fruits.add("Apple");
        Set<String> fruitsSet = new HashSet<String>(fruits);
        for(String fruit : fruitsSet){
            long count = fruits.stream().filter(f->f.equalsIgnoreCase(fruit)).count();
            System.out.println("the count of "+fruit+ " is "+count);
        }
        Map<String, Long> mymap = fruits.stream()
            .collect(Collectors.groupingBy(fruit-> fruit,  Collectors.counting()))
            .entrySet().stream().filter(fruitsEntry -> fruitsEntry.getValue() > 1).collect(Collectors.toMap(Entry :: getKey, Entry :: getValue));
       
        for(Entry<String, Long> e : mymap.entrySet()){
            System.out.println("the count of "+e.getKey()+ " is "+e.getValue());
        }

        fruits.stream()
            .collect(Collectors.groupingBy(fruit-> fruit,  Collectors.counting()))
            .entrySet().stream().filter(fruitsEntry -> fruitsEntry.getValue() > 1)
            .forEach(e -> {
                System.out.println("the count of "+e.getKey()+ " is "+e.getValue());
            });
    }
    
}