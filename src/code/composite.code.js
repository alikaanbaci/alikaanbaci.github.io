const composite = `import java.util.ArrayList;
import java.util.List;

/*--------------------------------------------------------

COMPOSITE PATTERN

When you have a hierarchical set of types and you want to
treat these types uniformly, it can be right choice.

---------------------------------------------------------*/


// Component class
abstract class Employee {

    private final String name;

    protected Employee (String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public abstract String work ();
}

// Leaf class
class Developer extends Employee {

    protected Developer(String name) {
        super(name);
    }

    @Override
    public String work() {
        return "Coding";
    }
}

// leaf class
class BusinessAnalyst extends Employee {

    protected BusinessAnalyst(String name) {
        super(name);
    }
    @Override
    public String work() {
        return "Analyzing";
    }
}

// Composite Class
class Manager extends Employee {

    private final List<Employee> reporters = new ArrayList<>();

    protected Manager(String name) {
        super(name);
    }

    @Override
    public String work() {
        return "Managing";
    }

    public void addEmployee(Employee employee) {
        this.reporters.add(employee);
    }

    public List<Employee> showReporters() {
        return new ArrayList<>(reporters);
    }

    public void showReporterWork() {
        for (Employee employee : reporters) {
            System.out.println(employee.getName()+" "+employee.work());
        }
    }
}`

export default composite;