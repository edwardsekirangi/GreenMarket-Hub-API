const { getAllProducts } = require("../controllers/productController");

test("getAllProducts should return an array", async () => {
  const req = {};
  const res = { json: jest.fn() };

  await getAllProducts(req, res);

  expect(res.json).toHaveBeenCalled();
  expect(Array.isArray(res.json.mock.calls[0][0])).toBe(true);
});
