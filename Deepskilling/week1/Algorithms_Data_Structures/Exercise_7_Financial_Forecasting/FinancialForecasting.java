public class FinancialForecasting {

    /**
     * Calculates the future value using a recursive approach.
     * 
     * @param presentValue The initial amount.
     * @param growthRate   The growth rate per period (e.g., 0.05 for 5%).
     * @param years        The number of periods (years) to forecast.
     * @return The predicted future value.
     */
    public static double calculateFutureValue(double presentValue, double growthRate, int years) {
        // Base Case: When the number of years is 0, the forecast is just the present value.
        if (years == 0) {
            return presentValue;
        }
        
        // Recursive Case: Value next year is the current value + growth.
        // We pass the new value and decrement the remaining years.
        return calculateFutureValue(presentValue * (1 + growthRate), growthRate, years - 1);
    }

    public static void main(String[] args) {
        double presentValue = 1000.0; // Initial amount $1000
        double growthRate = 0.05;     // 5% annual growth rate
        int years = 10;               // Predict for 10 years
        
        double futureValue = calculateFutureValue(presentValue, growthRate, years);
        
        System.out.println("--- Financial Forecasting ---");
        System.out.printf("Present Value: $%.2f\n", presentValue);
        System.out.printf("Annual Growth Rate: %.2f%%\n", growthRate * 100);
        System.out.printf("Years to forecast: %d\n", years);
        System.out.printf("Predicted Future Value: $%.2f\n", futureValue);
    }
}
