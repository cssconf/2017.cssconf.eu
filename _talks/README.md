# To add / edit talks

Read the [Content Editing](../README.md#content-editing) section of the README

Make sure to assign a valid `speaker_id` to link the talk to its speaker

## Properties:

Example:

    ---
    talk_id: example-css-talk
    title: "This is a placeholder example talk"
    ---

    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

 - `talk_id`: unique identifier for this talk. This must always correspond
    to the filename (without the `.md`-suffix) and should only contain
    regular characters, numbers and dashes.
    This id will be used to associate a talk with the speakers.
 - `title`: The talk's title.
 - the content of the document (everything behind the "frontmatter"-/metadata-block – that is, after the `---`-line)
   should contain the talk description that will be used on the schedule-page.
