import { test, expect } from '@playwright/test'

test.describe('Task 3 - OpenLibrary API', () => {
    test('should validate author details from OL1A.json', async ({ request }) => {
        const res = await request.get('https://openlibrary.org/authors/OL1A.json')
        expect(res.ok()).toBeTruthy()

        const body = await res.json()

        // Assertion 1
        expect(body).toHaveProperty('personal_name')
        expect(body.personal_name).toBe('Sachi Rautroy')

        // Assertion 2
        expect(Array.isArray(body.alternate_names)).toBeTruthy()
        expect(body.alternate_names).toContain('Yugashrashta Sachi Routray')
    })
})
