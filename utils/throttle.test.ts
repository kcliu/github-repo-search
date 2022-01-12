import { throttle } from './throttle';

jest.useFakeTimers();

describe('util functions', () => {
    test("throttled function will execute just once", () => {
        const func = jest.fn()
        const throttledFunc = throttle(func, 3000);

        let debouncedFunc: Function;
        for (let i = 0; i < 100; i++) {
            throttledFunc();
            }

            // Fast-forward time
            jest.runAllTimers();

            expect(func).toBeCalledTimes(1);
         })
});
