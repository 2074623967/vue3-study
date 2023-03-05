import { ref } from 'vue'
import PageContent from '@/components/page-content'

export function usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof PageContent>>()
  const handleResetClick = () => {
    pageContentRef.value?.getPageData()
  }
  const handleQueryClick = (queryInfo: any) => {
    console.log('开始搜索')
    pageContentRef.value?.getPageData(queryInfo)
  }
  return [pageContentRef, handleResetClick, handleQueryClick]
}
