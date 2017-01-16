# To add / edit talks

Read the [Content Editing](../README.md#content-editing) section of the README

Make sure to assign a valid `speaker_id` to link the talk to its speaker

## Properties:

Example:

    ---
    talk_id: scarlet-css-dress
    title: "Scarlet CSS Dress"
    ---

    Long dark night, just you and I, and my scarlet CSS dress, star lit
    night, wash away the dusk, you and I, the ocean at midnight, in my
    scarlet CSS, dress, yes, the fog rolls in, misty dark cloudy stormy
    humid blue yellow purple etc etc I’m Lana Del Ray wassup.

 - `talk_id`: unique identifier for this talk. This must always correspond
    to the filename (without the `.md`-suffix) and should only contain
    regular characters, numbers and dashes.
    This id will be used to associate a talk with the speakers.
 - `title`: The talk's title.
 - the content of the document (everything behind the "frontmatter"-/metadata-block – that is, after the `---`-line)
   should contain the talk description that will be used on the schedule-page.
