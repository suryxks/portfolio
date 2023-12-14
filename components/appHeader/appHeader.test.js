import React from "react";
import { screen,render} from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';
import { AppHeader } from "./appHeader";

test('App Header renders with links to Blogs ,Projects and Resume', async () => {
    render(<AppHeader/>)
    const user = userEvent.setup();
    const projectsLink = screen.getByText(/projects/i);
    const blogsLink = screen.getByText(/blogs/i);
    const resumeLink = screen.getByText(/resume/i);
    expect(projectsLink).toBeInTheDocument();
    expect(blogsLink).toBeInTheDocument();
    expect(resumeLink).toBeInTheDocument();
})