describe("bananaManager", () => {
  let bananaManager;

  beforeEach(() => {
    bananaManager = createBananaManager();
  });Ё

  test("addBanana should add a new banana with unique ID and default status", () => {
    const banana = {
      description: "Test banana",
      assignee: "John Doe",
    };

    bananaManager.addBanana(banana);
    const bananas = bananaManager.getAllBananas();

    expect(bananas.length).toBe(1);
    expect(bananas[0].id).toBeDefined();
    expect(bananas[0].status).toBe("unpeeled");
  });

  test("addBanana should throw an error if banana data is incorrect", () => {
    const banana = {
      description: "Test banana",
    };

    expect(() => bananaManager.addBanana(banana)).toThrow(
      "Некорректные данные банана"
    );
  });

  test("removeBanana should remove a banana by ID", () => {
    const banana1 = {
      description: "Banana 1",
      assignee: "John Doe",
    };
    const banana2 = {
      description: "Banana 2",
      assignee: "Jane Doe",
    };

    bananaManager.addBanana(banana1);
    bananaManager.addBanana(banana2);

    bananaManager.removeBanana(banana1.id);
    const bananas = bananaManager.getAllBananas();

    expect(bananas.length).toBe(1);
    expect(bananas[0].description).toBe("Banana 2");
  });

  test("updateBananaStatus should update the status of a banana by ID", () => {
    const banana = {
      description: "Test banana",
      assignee: "John Doe",
    };

    bananaManager.addBanana(banana);
    bananaManager.updateBananaStatus(banana.id, "peeled");
    const bananas = bananaManager.getAllBananas();

    expect(bananas[0].status).toBe("peeled");
  });

  test("updateBananaStatus should throw an error if status is incorrect", () => {
    const banana = {
      description: "Test banana",
      assignee: "John Doe",
    };

    bananaManager.addBanana(banana);

    expect(() => bananaManager.updateBananaStatus(banana.id, "rotten")).toThrow(
      "Некорректный статус"
    );
  });

  test("getBananasByAssignee should return bananas assigned to a specific assignee", () => {
    const banana1 = {
      description: "Banana 1",
      assignee: "John Doe",
    };
    const banana2 = {
      description: "Banana 2",
      assignee: "Jane Doe",
    };

    bananaManager.addBanana(banana1);
    bananaManager.addBanana(banana2);

    const bananasByAssignee = bananaManager.getBananasByAssignee("John Doe");

    expect(bananasByAssignee.length).toBe(1);
    expect(bananasByAssignee[0].description).toBe("Banana 1");
  });

  test("getBananasByStatus should return bananas with a specific status", () => {
    const banana1 = {
      description: "Banana 1",
      assignee: "John Doe",
      status: "unpeeled",
    };
    const banana2 = {
      description: "Banana 2",
      assignee: "Jane Doe",
      status: "peeled",
    };

    bananaManager.addBanana(banana1);
    bananaManager.addBanana(banana2);

    const bananasByStatus = bananaManager.getBananasByStatus("peeled");

    expect(bananasByStatus.length).toBe(1);
    expect(bananasByStatus[0].description).toBe("Banana 2");
  });

  test("getBananasByRipeness should return bananas with a specific ripeness", () => {
    const banana1 = {
      description: "Banana 1",
      assignee: "John Doe",
      ripeness: "ripe",
    };
    const banana2 = {
      description: "Banana 2",
      assignee: "Jane Doe",
      ripeness: "unripe",
    };

    bananaManager.addBanana(banana1);
    bananaManager.addBanana(banana2);

    const bananasByRipeness = bananaManager.getBananasByRipeness("unripe");

    expect(bananasByRipeness.length).toBe(1);
    expect(bananasByRipeness[0].description).toBe("Banana 2");
  });
});
