Mock testing is the procedure of testing the code with non-interference of the dependencies and different variables like network problems and traffic fluctuations making it isolated from others. The dependent objects are replaced by mock objects which simulate the behavior of real objects and exhibit authentic characteristics. The motto of mock testing is to focus on testing without prioritizing the dependencies. Here, we will discuss the following topics:

1.  **Where is Mock Testing Useful?**
2.  **Examples of Mock Testing**
3.  **How Does Mock Test Work?**
4.  **Does Mocking Require Developers To Modify Their Codebase?**
5.  **Mock Testing vs Traditional Unit Testing**
6.  **Types of Mock Testing**
7.  **Best Practices For Mock Testing**
8.  **Mocking Frameworks**
9.  **Precautions During Mock Testing**
10.  **Advantages of Mock Testing**
11.  **Limitations of Mock Testing**

Let’s start discussing each of these topics in detail.

### Where is Mock Testing Useful?

Here are some of the scenarios where mock testing is useful.

-   It is more useful while performing unit testing.
-   When you want to avoid external dependencies.
-   While you want to make the testing process faster with mock objects.
-   While there is a need to know the prior look of the actual test. 

### Examples of Mock Testing

Let’s take an example of Faking API calls.

-   Suppose there is a web service, and every time a form is submitted it makes a POST request to update or store new entries in the API server.
-   But it is not required to store unnecessary data in the Database while testing each time. 
-   By the help of Mock testing, one can replace the service with a mock object to validate the functionality, so that one can avoid the storing of unnecessary redundant information. 

### How Does Mock Test Work?

It’s an approach to unit testing that enables the creation of assertions concerning how the code behind the test is interacting with alternative system modules. 

-   In mock testing, the dependencies area unit is replaced with objects that simulate the behavior of the important ones. It is based upon behavior-based verification.
-   The mock object implements the interface of the real object by creating a pseudo one. Thus, it’s called mock.
-   It doesn’t focus on the whole code but rather emphasizes the particular part in the code that is going to be tested.
-   The mock object simply reads and responds with test data from a local filesystem.
-   Mocking does not require any modification of the codebase.
-   The inherited class while inheritance or dependencies in the case of constructors and other methods are replaced with mock objects during testing.
-   Unlike traditional unit testing, assertion is done by mock objects which are initialized in advance with respect to what method calls are expected and how they should respond.
-   Mocking is used for protocol testing in which it tests how to use API and how it will react to API implemented accordingly.

### Does Mocking Require Developers To Modify Their Codebase?

The mocking does not require modifying the codebase. The mock object simply reads and responds with test data from a local filesystem. 

-   The inherited class while inheritance or dependencies in the case of constructors and other methods, are replaced with mock objects during testing.
-   One considerable point is there, that if the code uses static objects or singletons, then it will be difficult to perform Mock testing by mocking the objects. In this scenario there is a need to refactor the code accordingly so that it can be mocked comfortably.

Unlike traditional unit testing, the assertion is done by mock objects which are initialized in advance with respect to what method calls are expected and how they should respond. Mocking is used for protocol testing in which it tests how to use API and how it will react to API implemented accordingly.

### **Mock Testing vs Traditional Unit Testing**

Below are some of the differences between mock testing and traditional unit testing:

| 
Mock Testing

 | 

Traditional Unit Testing

 |
| --- | --- |
| In mock testing, assertions are done by mock objects and no assertions are required from unit testing | While in traditional unit testing assertions are done for dependencies. |
| In mock testing, it is focused on how the fake/mock object can be incorporated and tested. | In traditional unit testing, it was focused on how the real object can be incorporated and tested. |
| Mock testing is more about behavior-based verification. | Traditional unit testing is more about state-based verification. |

### Types Of Mock Testing

1.  **Classloader-remapping-based mocking:** In this the reference is remapped by the class-loader so the mock object is loaded rather than the original object.
2.  **Proxy Based Mocking:** In this a proxy object is used rather than an original proxy object which handles all calls to original objects.
3.  **Database Based Mocking:** In a database-based mocking, the user does not perform the actual Database operation rather the user will replace the operation with a mock object to validate the functionality.
4.  **API Based Mocking:** In API-based mocking API mocks are used to simulate external dependencies and unexpected behavior. 

### Best Practices For Mock Testing

-   Avoid using dependencies on infrastructure while writing unit testing so that it can be reserved for integration tests.
-   Keep unit tests in a separate project from integration tests which ensures that the test project is away from references on infrastructure packages.
-   The input to be utilized ought to be the best doable so as to verify the behavior that simply measures the behavior of presently testing. By this test become more resilient to the changes occurring in the future in the codebase.
-   Avoid logical conditions and manual string concatenation in writing unit tests so as to focus on end results making it less prone to bugs.
-   In grouping similar objects or states helper method is preferred to leverage setup and teardown attributes for avoiding confusion while reading the tests. 
-   Naming standards explicitly express the contents of the test so the name of the test must incorporate 3 parts:
    -   Method name being tested.
    -   The testing scenario.
    -   The expected behavior once invoked.
-   AAA is the main myth of unit testing i.e., Arrange ,Act, Assert pattern used in unit testing.
    -   Arrange the objects, creating and setting them as needed.
    -   Act on associate in the object.
    -   Assert that as per the expectation.
-   Try to include one act per test instead of using multiple acts in writing the test code. Creating a separate test for each act ensures the test is focused just on a single case and it can be known which act if any test fails occurs. 

### Mocking Frameworks

Mocking frameworks are accustomed to generating replacement objects like Stubs and Mocks. Mocking frameworks complement unit testing frameworks by eradicating dependencies however don’t seem to be substituted for unit testing frameworks. By erasing the dependencies, they assist the unit testing method and aid developers in writing a lot of targeted and pithy unit tests. The mock tests conjointly perform quicker by really making the system isolated underneath the test.  
Some mocking frameworks are :

1.  **Using EasyMock:** It is an open-source framework that provides useful classes for mocking objects. It creates mock objects of classes and interfaces using the statically imported methods of the class extensions.
2.  **Using JMock:** It doesn’t rely on any static import features. It mocks interfaces only. JMock library is easy to use and provides better integration with Junit5. 
3.  **Using Mockito:** It also doesn’t rely on static import features. It creates mock objects through annotations. Thus it is used to register extensions for the annotated test class or test method.

### Precautions During Mock Testing

1.  **Only Mock the Type That Is Just Owned:** External sorts have dependencies on their own they could even modify their behavior at a later stage. A better approach is to produce an associate adapter and mock that adapter.
2.  **Don’t Mock Values:** Values mustn’t be mocked. Mocking aims to create the relationships and interactions between visible objects. Obtaining a value isn’t associated with the interaction.
3.  **Avoid Mocking Concrete Categories:** Relationships are made to view via interfaces easier instead of concrete classes. we’d find mocking some methods however forget others. Mock Roles, not objects.
4.  **Don’t Mock Everything:** This is often associated with anti-patterns. If everything is mocked, we have a tendency to might find testing one thing quite totally different from the production system.
5.  **Use Integration Tests:** Once testing multiple modules or if curious about information coming back from associate external information, integration testing must be done instead of mocking.
6.  **Negative Tests:** Mocks should be used to simulate errors and test error handling as well as to verify some other methods.

### Advantages Of Mock Testing

-   It creates a fake version of an external or internal service that can stand in for the real one, helping to run tests more quickly and more reliably. 
-   When the implementation model interacts with an object’s properties, a mock can be used instead of its function or behavior.
-   The mock object isolates the dependencies which allow for managing the test in a limiting span. From this it can be identified if a test fails it’s due to unit code not due to dependencies.
-   Mocking provides a limiting scope on shorter and more focused tests to make understanding of tests easier managed in a small scope by mocking up objects.
-   Mock test is faster as it uses mock databases, file system operations, and external services. Moreover, the test can be begun at any time as there is no need to wait for any other dependencies as well as isolating failures speeds up the development.
-   While running multiple users simultaneously, it is wise to mock the dependencies to make the test more efficient. Mock testing won’t create any bad effects on third-party services.

### Limitations Of Mock Testing

-   Mocks should properly understand all the dependencies otherwise they may not represent real-world behavior accurately.
-   Mocking may lead to tight coupling between mocks and code during testing. 
-   Overuse of mock testing may raise the expenditure required for maintenance for performing the tests.
-   Mocking class may force to make everything virtual that’s too instructive ultimately leads to bad class design.
-   If classes are mocked instead of interface it is worsen as the mock has a real class in an inherited form in the background. So, there is a chance of real implementation is executed while undergoing the test.