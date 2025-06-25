import { createClient, type ClientConfig } from '@sanity/client';
import  imageUrlBuilder  from '@sanity/image-url';  

const config: ClientConfig = {
  projectId: '5djtiqyl',
  dataset: 'production', 
  useCdn: true,
  apiVersion: '2025-05-08'
};

const sanityClient = createClient(config);

export default sanityClient;

export function processProjectEntires(rawProject: Project) {
  const builder = imageUrlBuilder(sanityClient);
  const projectImageUrl = builder.image(rawProject.image).url();
  const processedProject : ProcessedProject = {
    name: rawProject.projectName,
    company: rawProject.company,
    dateAccomplished: rawProject.dateAccomplished,
    slug: rawProject.slug,
    stack: rawProject.techStack,
    projectImageUrl: projectImageUrl,
    content: rawProject.content.map(proccesProjectContent)


  }
  return processedProject;
}

function proccesProjectContent(content : RawTextContent | RawImageContent) {
  if (content._type === 'block') {
    const processedTextContent : ProcessedTextContent = {
      type: 'text',
      style: content.style,
      textToRender: content.children.map((child) => {
        return child.text
      }).join('\n'),
    }
    return processedTextContent;
  } else {
    const builder = imageUrlBuilder(sanityClient);
    const projectImageUrl = builder.image(content).url();
    
    const processedImage: ProcessedImageContent = {
      type: 'image',
      imageUrl: projectImageUrl,
    }
    return processedImage;
  }
}