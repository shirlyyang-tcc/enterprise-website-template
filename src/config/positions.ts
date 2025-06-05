export interface Position {
  id: number;
  title: string;
  department: string;
  type: string;
  location: string;
  href: string;
}

export const positions: Position[] = [
  {
    id: 1,
    title: '市场经理',
    department: '市场部',
    type: '全职',
    location: '上海',
    href: '/careers/marketing-manager',
  },
  {
    id: 2,
    title: '高级前端工程师',
    department: '技术部',
    type: '全职',
    location: '北京',
    href: '/careers/senior-frontend',
  },
  {
    id: 3,
    title: '产品经理',
    department: '产品部',
    type: '全职',
    location: '深圳',
    href: '/careers/product-manager',
  },
  {
    id: 4,
    title: 'UI设计师',
    department: '设计部',
    type: '全职',
    location: '广州',
    href: '/careers/ui-designer',
  },
]; 