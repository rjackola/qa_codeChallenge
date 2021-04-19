import { EmployeeHandler } from "./pageObjects/EmployeeHandler";

const em = new EmployeeHandler();

describe("Employee Manager", () => {
  beforeEach(async () => {
    await em.navigate();
  });
  afterAll(async () => {
    await em.quit();
  });
  it("can add a new employee", async () => {
    await em.addEmployee();
    await em.selectEmployeeByName("New Employee");
    await em.editEmployee({
      name: "test person",
      phone: "1234567890",
      title: "test result",
    });
    await em.saveChanges();
    await em.selectEmployeeByName("Dollie Berry");
    await em.selectEmployeeByName("test person");
    let employee = await em.getEmployeeInfo();
    expect(employee.name).toEqual("test person");
    expect(employee.phone).toEqual("1234567890");
    expect(employee.title).toEqual("test result");
  });
  it("can edit an existing employee", async () => {
    await em.selectEmployeeByName("Bernice Ortiz");
    await em.editEmployee({ title: "Grand Poobah" });
    await em.saveChanges();
    await em.selectEmployeeByName("Phillip Weaver");
    await em.selectEmployeeByName("Bernice Ortiz");
    let employee = await em.getEmployeeInfo();
    expect(employee).toEqual({
      id: 1,
      name: "Bernice Ortiz",
      phone: "4824931093",
      title: "Grand Poobah",
    })
  })
    it("Can add a new employee", async ()=>{
      await em.addEmployee();
      await em.selectEmployeeByName("New Employee")
      await em.editEmployee({
        name: "Greg Allman",
        phone: "9876543212",
        title: "King of the world"});
    
      })
    it("Cancelling edit of employee", async () => {
        await em.selectEmployeeByName("Lou White")
        await em.editEmployee({ name: "Lou black"})
        await em.cancelChanges()
        })
      it("navigating away and doesn't save", async () => {
        await em.addEmployee();
      await em.selectEmployeeByName("Ruby Estrada")
      await em.editEmployee({
        name: "ruby eesssstrrradddaaa"})
      await em.selectEmployeeByName("Marnie Barnett")
      await em.selectEmployeeByName("Ruby Estrada")
      })
    })
  
 


