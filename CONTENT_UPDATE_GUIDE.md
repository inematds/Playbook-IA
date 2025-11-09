# Chapter Content Update Guide

## Overview
The app currently has a basic content structure in `src/data/chapters.js` with brief overviews and key takeaways. To populate full chapter content, you need to add the complete text to `src/data/fullChapters.js`.

## Current Status
- **Chapter 1**: ✅ Full content added (6 sections with complete text)
- **Chapters 2-14**: ⏳ Pending full content extraction

## How to Add Full Chapter Content

### Step 1: Extract Content from DOCX Files
Each chapter DOCX file contains the complete text. The content should be extracted and formatted into sections.

### Step 2: Add to fullChapters.js
Follow this structure:

```javascript
export const fullChapterContent = {
  1: {  // Chapter ID
    sections: [
      {
        title: "Section Title",
        content: `Full section content here...
        
Use blank lines for paragraphs.

### Use ### for subheadings

**Use ** for bold text**

*Use * for italic text*

\`Use backticks for code\`

- Use bullets for lists
- Like this

- [ ] Use - [ ] for checklists
- [ ] Like this`
      },
      // More sections...
    ]
  },
  2: {
    sections: [
      // Chapter 2 sections...
    ]
  }
};
```

### Step 3: Content Formatting Guidelines

The `ChapterContent` component automatically renders:

- **Headers**: `###` creates styled subheadings
- **Bold**: `**text**` → **text**
- **Italic**: `*text*` → *text*
- **Code**: `` `code` `` → `code`
- **Quotes**: Text in quotes gets special styling
- **Lists**: Lines starting with `- ` or `* `
- **Checklists**: Lines with `- [ ]`
- **Callouts**: Lines starting with emoji (🎓, 🔧, 🚀, ⚠️, 💎, etc.)
- **Blockquotes**: Lines starting with `*"`
- **Horizontal Rules**: `---` on its own line

### Step 4: Section Mapping

Each chapter in `chapters.js` has a `sections` array with brief descriptions. Map these to detailed content in `fullChapters.js`:

**chapters.js (overview):**
```javascript
sections: [
  {
    title: "The Opening Hook",
    content: "Brief description..."
  }
]
```

**fullChapters.js (detailed):**
```javascript
sections: [
  {
    title: "The Opening Hook: The $30,000 Misunderstanding",
    content: `Full multi-paragraph content with formatting...`
  }
]
```

## Chapter Content Sources

All chapter files are available at:
- Chapter 1: `/uploads/Chapter 1_AI Consulting_ Why Consultants Fail.docx`
- Chapter 2: `/uploads/Chapter 2_AI Consulting Playbook_ Discovery Call.docx`
- Chapter 3: `/uploads/Chapter 3_AI Consulting_ Reading the Room.docx`
- Chapter 4: `/uploads/Chapter 4_AI Consulting Playbook_ Solution Design.docx`
- Chapter 5: `/uploads/Chapter 5_AI Call Autopsy Protocol Chapter.docx`
- Chapter 6: `/uploads/Chapter 6_AI Consulting Playbook_ Audit Automation.docx`
- Chapter 7: `/uploads/Chapter 7_AI Consulting_ Communication's Crucial Role.docx`
- Chapter 8: `/uploads/Chapter 8_AI Consulting Chinese Menu Technique.docx`
- Chapter 9: `/uploads/Chatper 9_AI Consulting Playbook Chapter Creation.docx`
- Chapter 10: `/uploads/Chapter 10_AI Consulting Workshop Cheat Code.docx`
- Chapter 11: `/uploads/Chapter 11_AI Consulting Playbook Chapter Creation.docx`
- Chapter 12: `/uploads/Chapter 12_AI Consulting Playbook Chapter Creation.docx`
- Chapter 13: `/uploads/Chapter 13_AI Consulting Playbook_ Inbound Clients.docx`
- Chapter 14: `/uploads/Chapter 14_AI Consulting Workshop Playbook Design.docx`

## Testing

After adding content:
1. Rebuild the app: `npm run build`
2. Restart PM2: `pm2 restart ai-playbook`
3. Navigate to a chapter and verify content displays properly
4. Check that formatting (bold, lists, callouts) renders correctly

## Content Structure Best Practices

1. **Break long content into logical sections** (3-7 sections per chapter)
2. **Use descriptive section titles** that appear in the navigation
3. **Include formatting** to make content scannable (headers, lists, bold)
4. **Add callouts** for key insights using emoji markers
5. **Use bullet points** for frameworks and checklists
6. **Preserve examples and scripts** from the original text

## Example: Well-Formatted Content

```javascript
{
  title: "The Framework That Wins",
  content: `Once you've run the assessment, your job becomes simple.

**The secret:** the real money is not in Tier 1. It's in Tier 2.

### The Three-Tier Breakdown

**🎓 Tier 3: EDUCATION**
- **The Client**: "The Curious"
- **The Offer**: Workshops and training
- **The Money**: High-leverage, one-to-many

**🔧 Tier 2: PREP** ← **This is where you make the most money**
- **The Client**: "The Willing-but-Unready"
- **The Offer**: Fixing the foundation
- **The Money**: High-value, long-term projects

---

### ⚠️ Important Note

You are no longer a feature-peddler. You are a doctor.`
}
```

This format creates a rich, readable learning experience with clear structure and visual hierarchy.