package Runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


	@RunWith(Cucumber.class)
	@CucumberOptions(
			features = "src/test/java/Features", //the path of the feature files
			glue={"StepDefinitions"}, //the path of the step definition files
			format= {"pretty","html:target/cucumber-html-report", "json:target/cucumber.json", "junit:target/cucumber.xml"}, //to generate different types of reporting
			monochrome = true, //display the console output in a proper readable format
			strict = true, //it will check if any step is not defined in step definition file
			dryRun = false, //to check the mapping is proper between feature file and step def file
			tags = {"@include"}			
			)

public class RunnerTest {

}
