import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TeaserCard from './index.vue'
import { TeaserCardVariant } from './types'

describe('TeaserCard.vue', () => {

  it('renders title properly', () => {
    const wrapper = mount(TeaserCard, {
      props: {
        id: '1',
        title: 'Test Title',
        ingress: 'Test Ingress',
        variant: TeaserCardVariant.MediaFeatured
      }
    })

    expect(wrapper.find('.title').text()).toBe('Test Title')
  })

  it('applies truncation to title and ingress when max chars are set', () => {
    const wrapper = mount(TeaserCard, {
      props: {
        id: '2',
        title: 'This is a very long title that should be truncated',
        ingress: 'This is a long ingress that should be truncated after certain characters',
        maxTitleChar: 10,
        maxIngressChar: 20,
        enableMaxChar: true,
        variant: TeaserCardVariant.MediaFeatured
      }
    })

    const truncatedTitle = wrapper.find('.title').text()
    const truncatedIngress = wrapper.find('.ingress').text()

    expect(truncatedTitle).toBe('This is a..')
    expect(truncatedIngress).toBe('This is a long ingr..')  // Exact truncation for ingress
  })




  it('emits event when media is clicked', async () => {
    const wrapper = mount(TeaserCard, {
      props: {
        id: '3',
        title: 'Test Title',
        ingress: 'Test Ingress',
        variant: TeaserCardVariant.MediaFeatured,
        mediaSrc: 'image.jpg'
      }
    })

    await wrapper.find('.media').trigger('click')

    expect(wrapper.emitted()).toHaveProperty('actionMedia')
    expect(wrapper.emitted().actionMedia[0]).toEqual([{
      title: 'Test Title',
      id: '3'
    }])
  })

  it('renders labels with separator', () => {
    const wrapper = mount(TeaserCard, {
      props: {
        id: '4',
        title: 'Test Title',
        ingress: 'Test Ingress',
        labels: ['Label1', 'Label2', 'Label3'],
        variant: TeaserCardVariant.MediaFeatured
      }
    })

    const labels = wrapper.findAll('.label')
    expect(labels).toHaveLength(3)

    // Check that each label renders correctly without separator
    expect(labels[0].text()).toContain('Label1')
    expect(labels[1].text()).toContain('Label2')
    expect(labels[2].text()).toContain('Label3')

    // Check if separators are rendered properly
    const separators = wrapper.findAll('.separator')
    expect(separators).toHaveLength(2) // Two separators between three labels
    expect(separators[0].text()).toBe('|')
    expect(separators[1].text()).toBe('|')
  })


})
