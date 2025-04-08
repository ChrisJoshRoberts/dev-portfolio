type WorkExperience = {
  _id: string
  _type: 'workExperience'
  _createdAt: string
  _updatedAt: string
  _rev: string
  JobTitle?: string
  Company?: string
  Location?: string
  StartDate?: string
  EndDate?: string
}
type Project = {
  _id: string
  _type: 'project'
  _createdAt: string
  _updatedAt: string
  _rev: string
  projectName?: string
  company?: string
  slug?: string
  image?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    media?: unknown
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  }
  dateAccomplished?: string
  content?: Array<
    | {
        children?: Array<{
          marks?: Array<string>
          text?: string
          _type: 'span'
          _key: string
        }>
        style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote'
        listItem?: 'bullet' | 'number'
        markDefs?: Array<{
          href?: string
          _type: 'link'
          _key: string
        }>
        level?: number
        _type: 'block'
        _key: string
      }
    | {
        asset?: {
          _ref: string
          _type: 'reference'
          _weak?: boolean
          [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
        }
        media?: unknown
        hotspot?: SanityImageHotspot
        crop?: SanityImageCrop
        _type: 'image'
        _key: string
      }
  >
  techStack?: Array<string>
}