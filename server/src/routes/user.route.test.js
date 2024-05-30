const express = require('express');
const router = express.Router({ mergeParams: true });

// Test for the router initialization
describe('User Router', () => {
  it('should initialize the router with mergeParams option', () => {
    expect(router).toBeDefined();
    expect(router).toBeInstanceOf(express.Router);
    expect(router.mergeParams).toBe(true);
  });
});