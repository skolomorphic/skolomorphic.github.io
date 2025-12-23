import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

export async function GET(context) {
    const poe = await getCollection('proofOfExistence');
    poe.sort((a, b) => b.data.chapter - a.data.chapter);
    return rss({
        // `<title>` field in output xml
        title: 'Proof of Existence (@skolomorphic)',
        // `<description>` field in output xml
        description: 'A transmigration fantasy by skolomorphic',
        // Pull in your project "site" from the endpoint context
        // https://docs.astro.build/en/reference/api-reference/#site
        site: context.site,
        // Array of `<item>`s in output xml
        // See "Generating items" section for examples using content collections and glob imports
        items: poe.map((chapter) => ({
            title: `Chapter ${chapter.data.chapter}: ${chapter.data.title}`,
            pubDate: chapter.data.pubDate,
            // content: chapter.body,
            content: sanitizeHtml(parser.render(chapter.body), {
                allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img'])
            }),
            link: `/proof-of-existence/${chapter.data.chapter}/`
        })),
        // (optional) inject custom xml
        customData: `<language>en-us</language>`,
    });
}