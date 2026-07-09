# Exercise - Spring Core Load SimpleDateFormat from Spring Configuration XML

## Objective
To avoid the creation of `SimpleDateFormat` instances in multiple places across an application by defining a single reusable bean in the Spring XML Configuration file and retrieving it.

## Steps Performed
1. Copied the base `spring-learn` Maven project structure.
2. Created the Spring configuration file `date-format.xml` in the `src/main/resources` folder.
3. Defined a Spring `<bean>` with ID `dateFormat` for `java.text.SimpleDateFormat`, passing the pattern `"dd/MM/yyyy"` via a `<constructor-arg>`.
4. Created a new method `displayDate()` in `SpringLearnApplication.java`.
5. Inside `displayDate()`, initialized the Spring `ApplicationContext` using `ClassPathXmlApplicationContext("date-format.xml")`.
6. Retrieved the `dateFormat` bean dynamically using `context.getBean("dateFormat", SimpleDateFormat.class)`.
7. Used the injected `SimpleDateFormat` bean to parse the string `"31/12/2018"` into a `Date` object.
8. Printed the parsed `Date` object successfully to the console.
9. Ran the application locally and verified the logged output.
