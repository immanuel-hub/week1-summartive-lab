import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import App from "../App";
import ProjectForm from "../components/ProjectForm";
import SearchBar from "../components/SearchBar";
import ProjectList from "../components/ProjectList";

describe("App Tests", () => {
  test("shows app title", () => {
    render(<App />);
    expect(
      screen.getByText("Personal Project Showcase App")
    ).toBeInTheDocument();
});
  test("shows default projects", () => {
    render(<App />);

    expect(screen.getByText("Project 1")).toBeInTheDocument();
    expect(screen.getByText("Project 2")).toBeInTheDocument();
});

  test("adds new project", () => {
    render(<App />);

fireEvent.change(screen.getByLabelText("Title"), {
    target: { value: "My Project" },
 });
fireEvent.change(screen.getByLabelText("Description"), {
    target: { value: "My Description" },
});
fireEvent.click(screen.getByText("Add"));
expect(screen.getByText("My Project")).toBeInTheDocument();
});

  test("search filters projects", () => {
    render(<App />);

    fireEvent.change(
      screen.getByPlaceholderText("Search Projects"),{
        target: { value: "Project 1" },
}
);

expect(screen.getByText("Project 1")).toBeInTheDocument();
expect(
 screen.queryByText("Project 2")
).not.toBeInTheDocument();
 });

});
describe("ProjectForm Tests", () => {
  test("calls onAdd function", () => {
    const onAdd = vi.fn();
    render(<ProjectForm onAdd={onAdd} />);

fireEvent.change(screen.getByLabelText("Title"), {
    target: { value: "Test Project" },
});
fireEvent.change(screen.getByLabelText("Description"), {
 target: { value: "Test Description" },
});
    fireEvent.click(screen.getByText("Add"));
    expect(onAdd).toHaveBeenCalled();
});

});
describe("SearchBar Tests", () => {
test("shows search value", () => {
render(
      <SearchBar
        searchTerm="React"
        onSearch={() => {}}
      />
    );
    expect(
      screen.getByPlaceholderText("Search Projects").value
    ).toBe("React");
});
});
describe("ProjectList Tests", () => {
  test("shows project list", () => {
    const projects = [
      {
        id: 1,
        title: "Alpha",
        description: "First Project",
      },
      {
        id: 2,
        title: "Beta",
        description: "Second Project",
      },
    ];
    render(<ProjectList projects={projects} />);
    expect(screen.getByText("Alpha")).toBeInTheDocument();
    expect(screen.getByText("Beta")).toBeInTheDocument();
  });

});