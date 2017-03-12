export enum EntryTypes {
  share = <any> 'Share',
  article = <any> 'Article',
  album = <any> 'Album'
}

export enum EntryReportTypes {
  other = 0,
  plagiarism = 1,
  violation = 2
}

export enum NotificationTypes {
  comment = 0,
  entryPraise = 1,
  commentPraise = 2,
  favorite = 3,
  mention = 4
}

export enum PhotoTypes {
  normal = 0
}

export function getNames (e: any): String[] {
  const names = []
  for (let k in e) {
    if (typeof e[k] === 'number') names.push(k)
  }
  return names
}
