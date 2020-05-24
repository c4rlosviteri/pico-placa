import Validator from "../validator";

const validator = new Validator();

test("should return false since the plate doesn't have peak and plate", () => {
  expect(
    validator.hasPeakAndPlate({
      plate: "ABC-1234",
      date: "2020-06-16",
      time: "13:00",
    })
  ).toBe(false);
});

test("should return true since the plate does have peak and plate", () => {
  expect(
    validator.hasPeakAndPlate({
      plate: "ABC-1234",
      date: "2020-06-16",
      time: "18:00",
    })
  ).toBe(true);
});
