import { renderHook, act } from "@testing-library/react";
import { useIntersectionObserver } from "../useIntersectionObserver";

// Mock IntersectionObserver
const mockIntersectionObserver = jest.fn();
mockIntersectionObserver.mockReturnValue({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
});

window.IntersectionObserver = mockIntersectionObserver;

describe("useIntersectionObserver", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("returns initial state correctly", () => {
    const { result } = renderHook(() => useIntersectionObserver());

    expect(result.current[1]).toBe(false); // inView should be false initially
    expect(typeof result.current[0]).toBe("function"); // setRef should be a function
  });

  it("accepts custom options", () => {
    const options = { threshold: 0.5, rootMargin: "10px" };
    const { result } = renderHook(() => useIntersectionObserver(options));
    const mockElement = document.createElement("div");

    act(() => {
      result.current[0](mockElement);
    });

    expect(mockIntersectionObserver).toHaveBeenCalledWith(
      expect.any(Function),
      expect.objectContaining({
        threshold: 0.5,
        rootMargin: "10px",
      })
    );
  });

  it("uses default options when none provided", () => {
    const { result } = renderHook(() => useIntersectionObserver());
    const mockElement = document.createElement("div");

    act(() => {
      result.current[0](mockElement);
    });

    expect(mockIntersectionObserver).toHaveBeenCalledWith(
      expect.any(Function),
      expect.objectContaining({
        threshold: 0.1,
        rootMargin: "0px",
      })
    );
  });

  it("observes element when ref is set", () => {
    const { result } = renderHook(() => useIntersectionObserver());
    const mockElement = document.createElement("div");

    act(() => {
      result.current[0](mockElement);
    });

    expect(mockIntersectionObserver).toHaveBeenCalled();
  });

  it("handles intersection callback correctly", () => {
    const { result } = renderHook(() => useIntersectionObserver());
    const mockElement = document.createElement("div");

    act(() => {
      result.current[0](mockElement);
    });

    // Get the callback function that was passed to IntersectionObserver
    const callback = mockIntersectionObserver.mock.calls[0][0];

    // Simulate intersection
    act(() => {
      callback([{ isIntersecting: true, target: mockElement }]);
    });

    expect(result.current[1]).toBe(true); // inView should be true
  });

  it("handles non-intersection correctly", () => {
    const { result } = renderHook(() =>
      useIntersectionObserver({ triggerOnce: false })
    );
    const mockElement = document.createElement("div");

    act(() => {
      result.current[0](mockElement);
    });

    const callback = mockIntersectionObserver.mock.calls[0][0];

    // Simulate intersection
    act(() => {
      callback([{ isIntersecting: true, target: mockElement }]);
    });

    expect(result.current[1]).toBe(true);

    // Simulate non-intersection
    act(() => {
      callback([{ isIntersecting: false, target: mockElement }]);
    });

    expect(result.current[1]).toBe(false);
  });

  it("respects triggerOnce option", () => {
    const { result } = renderHook(() =>
      useIntersectionObserver({ triggerOnce: true })
    );
    const mockElement = document.createElement("div");

    act(() => {
      result.current[0](mockElement);
    });

    const callback = mockIntersectionObserver.mock.calls[0][0];
    const mockObserver = mockIntersectionObserver.mock.results[0].value;

    // Simulate intersection
    act(() => {
      callback([{ isIntersecting: true, target: mockElement }]);
    });

    expect(result.current[1]).toBe(true);
    expect(mockObserver.unobserve).toHaveBeenCalledWith(mockElement);
  });

  it("cleans up observer on unmount", () => {
    const { result, unmount } = renderHook(() => useIntersectionObserver());
    const mockElement = document.createElement("div");

    act(() => {
      result.current[0](mockElement);
    });

    const mockObserver = mockIntersectionObserver.mock.results[0].value;

    unmount();

    expect(mockObserver.unobserve).toHaveBeenCalledWith(mockElement);
  });

  it("handles null ref gracefully", () => {
    const { result } = renderHook(() => useIntersectionObserver());

    act(() => {
      result.current[0](null);
    });

    // Should not throw error and should not create observer
    expect(mockIntersectionObserver).not.toHaveBeenCalled();
  });

  it("updates observer when options change", () => {
    const { result, rerender } = renderHook(
      ({ options }) => useIntersectionObserver(options),
      { initialProps: { options: { threshold: 0.1 } } }
    );

    const mockElement = document.createElement("div");

    act(() => {
      result.current[0](mockElement);
    });

    expect(mockIntersectionObserver).toHaveBeenCalledTimes(1);

    // Change options
    rerender({ options: { threshold: 0.5 } });

    expect(mockIntersectionObserver).toHaveBeenCalledTimes(2);
  });
});
