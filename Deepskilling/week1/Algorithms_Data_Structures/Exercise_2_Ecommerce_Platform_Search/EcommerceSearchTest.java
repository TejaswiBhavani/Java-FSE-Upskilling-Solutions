import java.util.Arrays;
import java.util.Comparator;

// --- Product Class ---
class Product {
    private int productId;
    private String productName;
    private String category;

    public Product(int productId, String productName, String category) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }

    public int getProductId() {
        return productId;
    }
    
    public String getProductName() {
        return productName;
    }
    
    public String getCategory() {
        return category;
    }

    @Override
    public String toString() {
        return "Product{id=" + productId + ", name='" + productName + "', category='" + category + "'}";
    }
}

// --- Search Utility Class ---
class SearchUtil {
    // 1. Linear Search
    public static Product linearSearch(Product[] products, int targetId) {
        for (Product p : products) {
            if (p.getProductId() == targetId) {
                return p;
            }
        }
        return null;
    }

    // 2. Binary Search (Requires sorted array)
    public static Product binarySearch(Product[] products, int targetId) {
        int left = 0;
        int right = products.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (products[mid].getProductId() == targetId) {
                return products[mid];
            }
            
            if (products[mid].getProductId() < targetId) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return null;
    }
}

// --- Main Test Class ---
public class EcommerceSearchTest {
    public static void main(String[] args) {
        // Unsorted array for linear search
        Product[] products = {
            new Product(105, "Laptop", "Electronics"),
            new Product(101, "Smartphone", "Electronics"),
            new Product(109, "Desk Chair", "Furniture"),
            new Product(103, "Coffee Maker", "Appliances"),
            new Product(107, "Headphones", "Accessories")
        };

        System.out.println("--- Linear Search ---");
        Product result1 = SearchUtil.linearSearch(products, 109);
        System.out.println("Found (ID 109): " + (result1 != null ? result1 : "Not Found"));

        // Sorted array for binary search
        Product[] sortedProducts = Arrays.copyOf(products, products.length);
        Arrays.sort(sortedProducts, Comparator.comparingInt(Product::getProductId));

        System.out.println("\n--- Binary Search ---");
        Product result2 = SearchUtil.binarySearch(sortedProducts, 103);
        System.out.println("Found (ID 103): " + (result2 != null ? result2 : "Not Found"));
        
        // Searching for a non-existent product
        System.out.println("\n--- Search for Missing Product ---");
        Product result3 = SearchUtil.binarySearch(sortedProducts, 999);
        System.out.println("Found (ID 999): " + (result3 != null ? result3 : "Not Found"));
    }
}
