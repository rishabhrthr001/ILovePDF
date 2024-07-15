import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

const tools = [
  {
    title: 'Merge PDF',
    description: 'Combine PDFs in the order you want with the easiest PDF merger available.',
    isFree: true,
  },
  {
    title: 'Split PDF',
    description: 'Separate one page or a whole set for easy conversion into independent PDF files.',
    isFree: true,
  },
  {
    title: 'Compress PDF',
    description: 'Reduce file size while optimizing for maximal PDF quality.',
    isFree: true,
  },
  {
    title: 'PDF to Word',
    description: 'Easily convert your PDF files into easy to edit DOC and DOCX documents.',
    isFree: true,
  },
  {
    title: 'PDF to PowerPoint',
    description: 'Turn your PDF files into easy to edit PPT and PPTX slideshows.',
    isFree: true,
  },
  {
    title: 'Edit PDF',
    description: 'Add text, images, shapes or freehand annotations to a PDF document.',
    isFree: true,
  },
  {
    title: 'Excel to PDF',
    description: 'Make EXCEL spreadsheets easy to read by converting them to PDF.',
    isFree: true,
  },
  {
    title: 'PowerPoint to PDF',
    description: 'Make PPT and PPTX slideshows easy to view by converting them to PDF',
    isFree: true,
  },
  {
    title: 'Word to PDF',
    description: 'Make DOC and DOCX files easy to read by converting them to PDF.',
    isFree: true,
  },
  {
    title: 'PDF to Excel',
    description: 'Pull data straight from pdfs into EXCEL spreadsheets in a few short seconds.',
    isFree: true,
  },
  {
    title: 'PDF to JPG',
    description: 'Convert each PDF page into a JPG or extract all images contained in a PDF.',
    isFree: false,
  },
  {
    title: 'JPG to PDF',
    description: 'Convert JPG images to PDF in seconds. Easily adjust orientation and margins.',
    isFree: false,
  },
  {
    title: 'Rotate PDF',
    description: 'Quickly rotate PDF online and save permanently rotated PDF document.',
    isFree: false,
  },
  {
    title: 'Unlock PDF',
    description: 'Remove password and restrictions from your PDF.',
    isFree: false,
  },
  {
    title: 'Protect PDF',
    description: 'Encrypt your PDF with a password so it can\'t be removed.',
    isFree: false,
  },
  {
    title: 'Watermark PDF',
    description: 'Add a watermark to your PDF document.',
    isFree: false,
  },
  {
    title: 'eSign PDF',
    description: 'Sign your PDF document with a digital signature.',
    isFree: false,
  },
  {
    title: 'OCR PDF',
    description: 'Recognize text in scanned PDFs to create searchable and selectable text.',
    isFree: false,
  },
  {
    title: 'Redact PDF',
    description: 'Permanently remove sensitive information from your PDF.',
    isFree: false,
  },
  {
    title: 'PDF Reader',
    description: 'View and annotate your PDF files online.',
    isFree: false,
  },
  {
    title: 'PDF Converter',
    description: 'Convert to and from PDF using formats such as Word, Excel, PowerPoint, GIF and more.',
    isFree: false,
  },
  {
    title: 'PDF Editor',
    description: 'Edit PDF files online for free.',
    isFree: false,
  },
];

const PricingSection = () => {
    return (
        <div className="container mx-auto py-12">
          <h2 className="text-3xl font-bold text-center mb-8">Pricing Comparison</h2>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tool</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Free</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Paid Plan (Rs. 169/mo)</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {tools.map((tool, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{tool.title}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {tool.isFree ? (
                        <FontAwesomeIcon icon={faCheck} className="text-green-500" />
                      ) : (
                        <FontAwesomeIcon icon={faTimes} className="text-red-500" />
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <FontAwesomeIcon icon={faCheck} className="text-green-500" />
                    </td>
                  </tr>
                ))}̀
              </tbody>
            </table>
          </div>
        </div>
      );
    };

export default PricingSection;
