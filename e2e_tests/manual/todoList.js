const rootURL = `https://todo-vue3-vite.netlify.app/`;

const deviceDimensions = {
  width: 400,
  height: 600,
  deviceScaleFactor: 50,
  mobile: true,
};

/**
 * End-to-end test for the sample Vue3+Vite todo app located at
 * https://github.com/nightwatchjs-community/todo-vue
 */
describe("To-Do List End-to-End Test", async () => {
  // using the new element() global utility in Nightwatch 2 to init elements
  // before tests and use them later
  const todoElement = element("#new-todo-input");
  const addButtonEl = element('form button[type="submit"]');

  it("should add a todo using global element()", async function () {
    ///////////////////////////////////////////////////
    // browser can now also be accessed as a global   |
    ///////////////////////////////////////////////////

    // adding a new task to the list
    await browser
      //.pause(100)
      //.setDeviceDimensions(deviceDimensions)
      .windowSize("current", 1280, 720)
      .pause(100)
      .navigateTo(rootURL)
      .pause(100)
      .sendKeys(todoElement, "what is nightwatch?")
      .pause(100)
      .click(addButtonEl);

    ///////////////////////////////////////////////////
    // global expect is equivalent to browser.expect  |
    ///////////////////////////////////////////////////

    // verifying if there are 5 tasks in the list
    await expect.elements("#todo-list ul li").count.toEqual(5);

    // verifying if the 4th task if the one we have just added
    const lastElementTask = element({
      selector: "#todo-list ul li",
      index: 4,
    });

    await expect(lastElementTask).text.toContain("what is nightwatch?");

    // find our task in the list and mark it as done
    const inputElement = await lastElementTask.findElement(
      'input[type="checkbox"]'
    );
    await browser.click(inputElement);

    // verify if there are 3 tasks which are marked as done in the list
    await expect.elements("#todo-list ul li input:checked").count.toEqual(3);

    await browser.end();
  });
});
