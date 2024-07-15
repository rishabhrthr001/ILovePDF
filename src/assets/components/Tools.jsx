
import React from 'react';
import ToolCard from './ToolCard';

const tools = [
  {
    title: 'Merge PDF',
    description: 'Combine PDFs in the order you want with the easiest PDF merger available.',
    icon: 'path/to/merge-icon.svg', 
    link: '/merge-pdf', 
  },
  {
    title: 'Split PDF',
    description: 'Separate one page or a whole set for easy conversion into independent PDF files.',
    icon: 'path/to/split-icon.svg', 
    link: '/split-pdf', 
  },
  {
    title: 'Compress PDF',
    description: 'Reduce file size while optimizing for maximal PDF quality.',
    icon: 'path/to/compress-icon.svg', 
    link: '/compress-pdf', 
  },
  {
    title: 'PDF to Word',
    description: 'Easily convert your PDF files into easy to edit DOC and DOCX documents.',
    icon: 'path/to/pdf-to-word-icon.svg', 
    link: '/pdf-to-word', 
  },
  {
    title: 'PDF to PowerPoint',
    description: 'Turn your PDF files into easy to edit PPT and PPTX slideshows.',
    icon: 'path/to/pdf-to-powerpoint-icon.svg', 
    link: '/pdf-to-powerpoint', 
  },
  {
    title: 'Edit PDF',
    description: 'Add text, images, shapes or freehand annotations to a PDF document.',
    icon: 'path/to/edit-icon.svg', 
    link: '/edit-pdf', 
  },
  {
    title: 'Excel to PDF',
    description: 'Make EXCEL spreadsheets easy to read by converting them to PDF.',
    icon: 'path/to/edit-icon.svg', 
    link: '/edit-pdf', 
  },
  {
    title: 'PowerPoint to PDF',
    description: 'Make PPT and PPTX slideshows easy to view by converting them to PDF',
    icon: 'path/to/edit-icon.svg', 
    link: '/edit-pdf', 
  },
  {
    title: 'Word to PDF',
    description: 'Make DOC and DOCX files easy to read by converting them to PDF.',
    icon: 'path/to/edit-icon.svg', 
    link: '/edit-pdf', 
  },
  {
    title: 'PDF to Excel',
    description: 'Pull data straight from pdfs into EXCEL spreadsheets in a few short seconds.',
    icon: 'path/to/edit-icon.svg', 
    link: '/edit-pdf', 
  },
  {
    title: 'PDF to JPG',
    description: 'Convert each PDF page into a JPG or extract all images contained in a PDF.',
    icon: 'path/to/edit-icon.svg', 
    link: '/edit-pdf', 
  },
  {
    title: 'JPG to PDF',
    description: 'Convert JPG images to PDF in seconds. Easily adjust orientation and margins.',
    icon: 'path/to/edit-icon.svg', 
    link: '/edit-pdf', 
  },
    {
        title: 'Rotate PDF',
        description: 'Quickly rotate PDF online and save permanently rotated PDF document.',
        icon: 'path/to/edit-icon.svg', 
        link: '/edit-pdf', 
    },
    {
        title: 'Unlock PDF',
        description: 'Remove password and restrictions from your PDF. All files are processed in the cloud and there is no need to download or install any software.',
        icon: 'path/to/edit-icon.svg', 
        link: '/edit-pdf', 
    },
    {
        title: 'Protect PDF',
        description: 'Encrypt your PDF with a password so it can\'t be removed.',
        icon: 'path/to/edit-icon.svg', 
        link: '/edit-pdf', 
    },
    {
        title: 'Watermark PDF',
        description: 'Add a watermark to your PDF document. It\'s easy to use and secure.',
        icon: 'path/to/edit-icon.svg', 
        link: '/edit-pdf', 
    },
    {
        title: 'eSign PDF',
        description: 'Sign your PDF document with a digital signature according to the ESIGN Act.',
        icon: 'path/to/edit-icon.svg', 
        link: '/edit-pdf', 
    },
    {
        title: 'OCR PDF',
        description: 'Recognize text in scanned PDFs to create searchable and selectable text.',
        icon: 'path/to/edit-icon.svg', 
        link: '/edit-pdf', 
    },
    {
        title: 'Redact PDF',
        description: 'Permanently remove sensitive information from your PDF.',
        icon: 'path/to/edit-icon.svg', 
        link: '/edit-pdf', 
    },
    {
        title: 'PDF Reader',
        description: 'View and annotate your PDF files online with our easy to use PDF viewer.',
        icon: 'path/to/edit-icon.svg', 
        link: '/edit-pdf', 
    },
    {
        title: 'PDF Converter',
        description: 'Convert to and from PDF using formats such as Word, Excel, PowerPoint, GIF and more.',
        icon: 'path/to/edit-icon.svg', 
        link: '/edit-pdf', 
    },
    {
        title: 'PDF Editor',
        description: 'Edit PDF files online for free. No software installation is required.',
        icon: 'path/to/edit-icon.svg', 
        link: '/edit-pdf', 
    },  
];

const Tools = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {tools.map((tool, index) => (
          <ToolCard
            key={index}
            title={tool.title}
            description={tool.description}
            icon={tool.icon}
            badge={tool.badge}
            link={tool.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Tools;
